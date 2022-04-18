import  Swal from 'sweetalert2'

export const CheckoutFail = () => {

    Swal.fire(
        'Algo salió mal.',
        'Mientras confirmabas tu compra alguien pudo comprar este producto y el stock no es suficiente.',
        'warning'
      )
}
