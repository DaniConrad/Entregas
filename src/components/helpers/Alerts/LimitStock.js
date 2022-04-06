import  Swal from 'sweetalert2'

export const LimitStock = (stock) => {

    const Toast = Swal.mixin({
        toast: true,
        showCloseButton: true,
        showConfirmButton:false,
      })

      Toast.fire({
        icon: 'error',
        title: `El Stock disponible es ${stock}`
      })

}


