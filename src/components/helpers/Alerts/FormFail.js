import  Swal from 'sweetalert2'

export const FormFail = () => {

    Swal.fire(
        '¡Error!',
        'Debes completar todos los campos correctamente.',
        'error'
      )
}




