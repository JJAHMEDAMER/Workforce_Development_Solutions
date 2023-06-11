export const appFetch = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      alert(`Failed to fetch user data \n${res.status}:: ${res.statusText}`);
      throw new Error(
        `Failed to fetch user data \n${res.status}:: ${res.statusText}`
      );
    }
    return res;
  } catch (e) {
    console.error(`Failed to fetch user data ${e}`);
  }
};
