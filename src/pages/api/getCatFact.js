export const getCatFact = async () => {
  try {
    const res = await fetch(`http://localhost:8080/profile/addfriend/${myId}`, {
      method: "PATCH",
      body: JSON.stringify({
        _id: friend,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {}
};
