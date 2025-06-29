import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir mensagem de erro se login falhar', () => {
    authServiceSpy.login.and.returnValue(throwError(() => new Error('401')));
    component.loginForm.setValue({
      email: 'teste@email.com',
      password: '123456',
    });

    component.onSubmit();
    expect(component.errorMessage).toBe('Usuário ou senha inválidos');
  });

  it('deve redirecionar para dashboard se login for bem-sucedido', () => {
    const fakeResponse = { token: 'abc123' };
    authServiceSpy.login.and.returnValue(of(fakeResponse));
    component.loginForm.setValue({
      email: 'teste@email.com',
      password: '123456',
    });

    component.onSubmit();

    expect(localStorage.getItem('token')).toBe('abc123');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('deve desabilitar o botão se o formulário for inválido', () => {
    component.loginForm.setValue({ email: '', password: '' });
    expect(component.loginForm.invalid).toBeTrue();
  });
});
