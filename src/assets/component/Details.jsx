import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Toast Initialization
//toast.configure();

const Details = () => {
  const brand = useLoaderData();

  const { brand_name, description, coupons, shop_link } = brand; // ব্র্যান্ড ডেটা

  // Copy Success Toast
  const handleCopy = (couponCode) => {
    toast.success(`Coupon Code "${couponCode}" Copied Successfully!`, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card bg-base-100 shadow-xl p-5">
        <h1 className="text-3xl font-bold mb-5">{brand_name}</h1>
        <p className="text-gray-600 mb-5">{description}</p>

        <h2 className="text-2xl font-bold mb-3">Available Coupons:</h2>
        {coupons && coupons.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-6">
            {coupons.map((coupon, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg bg-gray-50 shadow-sm"
              >
                <p className="font-bold text-lg">
                  Code: <span className="text-blue-600">{coupon.coupon_code}</span>
                </p>
                <p>{coupon.description}</p>
                <p>
                  <strong>Conditions:</strong> {coupon.condition}
                </p>
                <p>
                  <strong>Expiry Date:</strong> {coupon.expiry_date}
                </p>

                <div className="flex gap-2 mt-4">
                  {/* Copy Code Button */}
                  <CopyToClipboard text={coupon.coupon_code}>
                    <button
                      onClick={() => handleCopy(coupon.coupon_code)}
                      className="btn btn-sm btn-primary"
                    >
                      Copy Code
                    </button>
                  </CopyToClipboard>

                  {/* Use Now Button */}
                  <button
                    onClick={() => window.open(shop_link, "_blank")}
                    className="btn btn-sm btn-secondary"
                  >
                    Use Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No coupons available for this brand.</p>
        )}
      </div>
    </div>
  );
};

export default Details;
