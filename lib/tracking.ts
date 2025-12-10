export const pushData = (payload: Record<string, string | number | object>) => {
  if (typeof window === "undefined") return;

  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  console.info(`[debug] push event: ${payload.event} \n`, payload);

  window.dataLayer.push(payload);
};

/**
 * view_item event
 */
export const viewItem = (product: {
  id: string;
  name: string;
  price: number;
}) => {
  pushData({
    event: "view_item",
    ecommerce: {
      items: [
        {
          item_id: product.id,
          item_name: product.name,
          price: product.price,
        },
      ],
    },
  });
};

/**
 * add_to_cart event
 */
export const addToCart = (item: {
  id: string;
  name: string;
  price: number;
  quantity: number;
}) => {
  pushData({
    event: "add_to_cart",
    ecommerce: {
      items: [
        {
          item_id: item.id,
          item_name: item.name,
          price: item.price,
          quantity: item.quantity,
        },
      ],
    },
  });
};

/**
 * remove_from_cart event
 */
export const removeFromCart = (item: {
  id: string;
  name: string;
  price: number;
  quantity: number;
}) => {
  const data = {
    event: "remove_from_cart",
    ecommerce: {
      items: [
        {
          item_id: item.id,
          item_name: item.name,
          price: item.price,
          quantity: item.quantity,
        },
      ],
    },
  };
  console.info(`[debug] event: ${data.event} \n`, data);
  pushData(data);
};

/**
 * Begin Checkout
 */
export const beginCheckout = (
  items: { id: string; name: string; price: number; quantity: number }[]
) => {
  const data = {
    event: "begin_checkout",
    ecommerce: {
      items: items.map((i) => ({
        item_id: i.id,
        item_name: i.name,
        price: i.price,
        quantity: i.quantity,
      })),
    },
  };
  console.info(`[debug] event: ${data.event} \n`, data);
  pushData(data);
};

/**
 * Add Shipping Info
 */
export const addShipping = (
  shippingMethod: string,
  items: { id: string; name: string; price: number; quantity: number }[]
) => {
  pushData({
    event: "add_shipping_info",
    ecommerce: {
      shipping_tier: shippingMethod,
      items: items.map((i) => ({
        item_id: i.id,
        item_name: i.name,
        price: i.price,
        quantity: i.quantity,
      })),
    },
  });
};

/**
 * Add Payment Info
 */
export const addPayment = (
  paymentMethod: string,
  items: { id: string; name: string; price: number; quantity: number }[]
) => {
  pushData({
    event: "add_payment_info",
    ecommerce: {
      payment_type: paymentMethod,
      items: items.map((i) => ({
        item_id: i.id,
        item_name: i.name,
        price: i.price,
        quantity: i.quantity,
      })),
    },
  });
};

/**
 * Purchase Completed
 */
export const purchaseSuccess = (
  transactionId: string,
  items: { id: string; name: string; price: number; quantity: number }[],
  value: number,
  currency: string = "EUR"
) => {
  pushData({
    event: "purchase",
    ecommerce: {
      transaction_id: transactionId,
      value,
      currency,
      items: items.map((i) => ({
        item_id: i.id,
        item_name: i.name,
        price: i.price,
        quantity: i.quantity,
      })),
    },
  });
};

/** --- Page Tracking --- */

export const pageView = (pagePath: string, pageTitle: string) => {
  pushData({
    event: "page_view",
    page_path: pagePath,
    page_title: pageTitle,
  });
};
