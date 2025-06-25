import SweetAlert from "sweetalert2";

export const Toast = SweetAlert.mixin({
    toast: true,
    position: "top-end",
    timer: 3000,
    showConfirmButton: false,
    timerProgressBar: true,
	didOpen: (toast: Element) => {
		toast.addEventListener("mouseenter", SweetAlert.stopTimer);
		toast.addEventListener("mouseleave", SweetAlert.resumeTimer);
	}
});
