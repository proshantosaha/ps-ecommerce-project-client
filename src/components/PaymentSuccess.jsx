import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import TimelineStep from './TimelineStep';
import { getBaseUrl } from '../utils/getBaseUrl';

const steps = [
  {
      status: 'pending',
      label: 'Pending',
      description: 'Your order has been created and is awaiting processing.',
      icon: { iconName: 'edit-2-line', bgColor: 'red-500', textColor: 'gray-800' },
  },
  {
      status: 'processing',
      label: 'Processing',
      description: 'Your order is currently being processed.',
      icon: { iconName: 'loader-line', bgColor: 'yellow-500', textColor: 'yellow-800' },
  },
  {
      status: 'shipped',
      label: 'Shipped',
      description: 'Your order has been shipped.',
      icon: { iconName: 'truck-line', bgColor: 'blue-800', textColor: 'blue-100' },
  },
  {
      status: 'completed',
      label: 'Completed',
      description: 'Your order has been successfully completed.',
      icon: { iconName: 'check-line', bgColor: 'green-800', textColor: 'white' },
  },
];

const PaymentSuccess = () => {
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const sessionId = query.get("session_id");

    const confirmPayment = async () => {
      if (!sessionId) {
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.post(
          `${getBaseUrl()}/api/orders/confirm-payment`,
          { session_id: sessionId }
        );

        if (response?.data?.data) {
          setOrder(response.data.data);
        } else {
          console.error("Order not found!");
        }
      } catch (error) {
        console.error("Payment confirmation failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    confirmPayment();
  }, []);

  if (isLoading) return <Loading />;

  if (!order) {
    return <div className="section__container rounded p-6">
      <h2 className="text-2xl font-semibold mb-4">Order not found</h2>
      <p>Please check your order details.</p>
    </div>;
  }

  const isCompleted = (status) => {
  if (!order?.status) return false; // ✅ prevent crash
  const statuses = ['pending', 'processing', 'shipped', 'completed'];
  return statuses.indexOf(status) < statuses.indexOf(order.status);
};

const isCurrent = (status) => order?.status === status; // safe optional chaining


  return (
    <div className='section__container rounded p-6'>
      <h2 className='text-2xl font-semibold mb-4'>Payment {order.status}</h2>
      <p className='mb-4'>Order Id: {order.orderId}</p>
      <p className='mb-8'>Status: {order.status}</p>

      <ol className='sm:flex items-center relative'>
        {steps.map((step, index) => (
         <TimelineStep 
  key={index} 
  step={step}
  order={order || {}}
  isCompleted={isCompleted(step.status)}
  isCurrent={isCurrent(step.status)}
  isLastStep={index === steps.length - 1}
  icon={step.icon}
  description={step.description}
/>
        ))}
      </ol>
    </div>
  )
}

export default PaymentSuccess;
