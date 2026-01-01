export const runtimeConfig = {
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  contactEndpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "",
  web3FormsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
};

export const envWarnings = {
  calendlyConfigured: Boolean(runtimeConfig.calendlyUrl),
  contactFormConfigured:
    Boolean(runtimeConfig.contactEndpoint) &&
    Boolean(runtimeConfig.web3FormsKey),
};
