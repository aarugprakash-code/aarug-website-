export async function submitForm({ form_type, data }) {
  const params = new URLSearchParams();
  params.append("form_type", form_type);
  params.append("data", JSON.stringify(data));

  fetch(
    `${import.meta.env.VITE_AARUG_API_URL}?secret=${import.meta.env.VITE_AARUG_SECRET}`,
    {
      method: "POST",
      body: params,
      mode: "no-cors"
    }
  );
}
