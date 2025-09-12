import React from "react";

const ConditionalStyling = () => {
  const orderStatus = "unTracked";

  return (
    <section className="h-screen w-screen">
      <StatusBar status={"preparing"} />
      <StatusBar status={"delivered"} />
      <StatusBar status={"cancelled"} />
      <StatusBar status={"khsdkhfhsdf"} />
      <StatusBar  />
    </section>
  );
};

export default ConditionalStyling;

const StatusBar = ({ status }) => {

  function handleStatusColor(orderStatus) {
    switch (orderStatus) {
      case "preparing":
        return "bg-yellow-600";
      case "delivered":
        return "bg-green-600";
      case "cancelled":
        return "bg-red-600";
      default:
        return "bg-blue-600";
    }
  }
  function handleStatusTextColor(orderStatus) {
    switch (orderStatus) {
      case "preparing":
        return "text-yellow-600";
      case "delivered":
        return "text-green-600";
      case "cancelled":
        return "text-red-600";
      default:
        return "text-blue-600";
    }
  }

  return (
    <div className={`w-fit rounded-md p-2 border-2 gap-x-4 flex items-center m-6 ${handleStatusTextColor(status)} font-bold capitalize`}>
      <div className={`size-2 rounded-full ${handleStatusColor(status?.toLowerCase())}`} ></div>
      {status} 
    </div>
  );
};
