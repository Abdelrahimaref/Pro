function refuse(){
    const Toast = Swal.mixin({
        toast: false,
        position: 'center',
        showConfirmButton: false,
        timer: 1500
    })
      
      Toast.fire({
        type: 'success',
        title: 'Refusé avec succès'
        })
}
function accept(){
    const Toast = Swal.mixin({
        toast: false,
        position: 'center',
        showConfirmButton: false,
        timer: 1500
    })
      
      Toast.fire({
        type: 'success',
        title: 'Accepté avec succès'
        })
}