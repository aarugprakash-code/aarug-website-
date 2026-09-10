export async function submitForm({ form_type, data }) {

  let deviceId = localStorage.getItem("aarug_device_id");

  if (!deviceId) {
    deviceId = crypto.randomUUID();
    localStorage.setItem("aarug_device_id", deviceId);
  }

  const params = new URLSearchParams();
  params.append("form_type", form_type);
  params.append(
    "data",
    JSON.stringify({
      ...data,
      device_id: deviceId
    })
  );

  fetch(
    `${import.meta.env.VITE_AARUG_API_URL}?secret=${import.meta.env.VITE_AARUG_SECRET}`,
    {
      method: "POST",
      body: params,
      mode: "no-cors"
    }
  );
}
