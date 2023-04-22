export const getSavedResIds = () => {
  const savedResIds = localStorage.getItem("saved_reservation")
    ? JSON.parse(localStorage.getItem("saved_reservation"))
    : [];

  return savedResIds;
};

// this function will save the resids to local storage
export const saveResIds = (resIdArr) => {
  if (resIdArr.length) {
    localStorage.setItem("saved_reservation", JSON.stringify(resIdArr));
  } else {
    localStorage.removeItem("saved_reservation");
  }
};

// this function will remove the resid when removed from the database
export const removeResId = (resId) => {
  const savedResIds = localStorage.getItem("saved_reservation")
    ? JSON.parse(localStorage.getItem("saved_reservation"))
    : null;

  if (!savedResIds) {
    return false;
  }

  const updatedSavedResIds = savedResIds?.filter(
    (savedResId) => savedResId !== resId
  );
  localStorage.setItem(
    "saved_reservations",
    JSON.stringify(updatedSavedResIds)
  );

  return true;
};
