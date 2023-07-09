package com.example.demo.services;


import com.example.demo.model.Order;
import com.example.demo.model.ShopItem;
import com.example.demo.model.User;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.ShopItemRepository;
import com.example.demo.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final ShopItemRepository shopItemRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository, UserRepository userRepository, ShopItemRepository shopItemRepository) {
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
        this.shopItemRepository = shopItemRepository;
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order createOrder(List<Long> itemIds, Long userId, String date) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            List<ShopItem> items = new ArrayList<>();
            for (Long itemId : itemIds) {
                Optional<ShopItem> shopItemOptional = shopItemRepository.findById(itemId);
                shopItemOptional.ifPresent(items::add);
            }
            Order order = new Order();
            order.setUser(userOptional.get());
            order.setItems(items);
            order.setDate(date);
            return orderRepository.save(order);
        } else {
            throw new IllegalArgumentException("User with id " + userId + " does not exist");
        }
    }
}
