export const simulatePhonePePayment = async (planName = "Silver") => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Simulated PhonePe payment for ${planName} Plan`);
      resolve({
        status: "success",
        message: `Payment for ${planName} plan successful.`,
        redirectUrl: "/payment-success",
      });
    }, 1000);
  });
};

export const simulatePhonePeGoldPayment = async (planName = "Gold") => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Simulated PhonePe payment for ${planName} Plan`);
      resolve({
        status: "success",
        message: `Payment for ${planName} plan successful.`,
        redirectUrl: "/payment-success",
      });
    }, 1000);
  });
};
