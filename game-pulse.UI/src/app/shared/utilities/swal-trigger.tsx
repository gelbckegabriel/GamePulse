import Swal, { SweetAlertResult } from "sweetalert2";

export function SwalAlertTrigger(title: string, description: string) {
  return Swal.fire({
    icon: "warning",
    title: title,
    html: `${description}`,
    confirmButtonColor: "#f27474",
    confirmButtonText: "Close",
    background: "#555",
    color: "#EEE",
  });
}

export function SwalErrorTrigger(title: string, description: string, error?: unknown): Promise<SweetAlertResult> {
  return Swal.fire({
    icon: "error",
    title: title,
    text: `${description}`,
    footer: `${error}`,
    confirmButtonColor: "#f27474",
    confirmButtonText: "Close",
    background: "#555",
    color: "#EEE",
  });
}
