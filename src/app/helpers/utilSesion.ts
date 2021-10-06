import Swal from 'sweetalert2';
import { TokenStorageService } from '../services/token-storage.service';

export function logout(tokenStorage: TokenStorageService): void {
    Swal.fire({
        title: 'Advertencia',
        text: `Su Sesión ha expirado`,
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ir al Login'
    }).then((result) => {
        if (result.value) {
            tokenStorage.signOut();
            window.location.reload();
        }
    });
}