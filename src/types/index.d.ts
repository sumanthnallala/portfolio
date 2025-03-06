declare module "emailjs-com" {
  export function send(
    serviceID: string,
    templateID: string,
    templateParams?: Record<string, unknown>,
    userID?: string
  ): Promise<{ status: number; text: string }>;

  export function sendForm(
    serviceID: string,
    templateID: string,
    form: HTMLFormElement,
    userID?: string
  ): Promise<{ status: number; text: string }>;
}
