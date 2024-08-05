import { Request, Response, NextFunction } from 'express';
import Customer from '../models/CustomerModel';
import CustomerRepository from '../repositories/CustomerRepository';

async function getCustomer(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const customer = await CustomerRepository.getCustomer(parseInt(id));
    if (customer)
        res.json(customer);
    else 
        res.sendStatus(404);    
}

async function getCustomers(req: Request, res: Response, next: NextFunction) {
    const customers = await CustomerRepository.getCustomers();
    res.json(customers);
}


async function postCustomer(req: Request, res: Response, next: NextFunction) {
    const customer = req.body as Customer;
    const result = await CustomerRepository.addCustomer(customer);
    if (result)
        res.status(201).json(result);
    else
        res.sendStatus(400);
}

async function patchCustomer(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const customer = req.body as Customer;
    const result = await CustomerRepository.updateCustomer(parseInt(id), customer);
    if (result)
        res.json(result);
    else
        res.sendStatus(404);
}

async function deleteCustomer(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const success = await CustomerRepository.deleteCustomer(parseInt(id));
    if (success)
        res.sendStatus(204);
    else
        res.sendStatus(404);
}

export default {
    getCustomer,
    getCustomers,
    postCustomer,
    patchCustomer,
    deleteCustomer
}

