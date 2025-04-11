import { Order } from '../Models/Order';
import React from 'react';

export interface PaymentStrategy {
  pay(order: Order, amount: number): Promise<boolean>;
}