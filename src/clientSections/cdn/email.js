export const emailJSSDK = () => {
  const config = {
    origin: "https://api.emailjs.com",
    libVersion: "4.4.1",
    serviceId: "portfolio_service",
    templateId: "portfolio_contact_form",
    publicKey: "ql5OHlL_FT89AsFH6",
    sendFormEndpoint: "/api/v1.0/email/send-form",
  };
  const send = async (r) => {
    return await (await fetch(config.origin + config.sendFormEndpoint, {
      method: "POST",
      body: r,
    })).text();
  };
  /**
   * Send form data to emailjs
   * @param {*} o HTML form element
   * @returns Promise
   */
  const sendForm = async (o) => {
    const j = new FormData(o);
    j.append("lib_version", config.libVersion);
    j.append("service_id", config.serviceId);
    j.append("template_id", config.templateId);
    j.append("user_id", config.publicKey);
    return send(j);
  };
  return { sendForm };
};
