package com.example.demo.controller;


import com.example.demo.model.Order;

import com.example.demo.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @PostMapping("/buy")
    public Order createOrder(@RequestParam Long userId, @RequestParam String date, @RequestBody List<Long> itemIds) {
        System.out.println(itemIds);
        return orderService.createOrder(itemIds, userId, date);
    }
}
