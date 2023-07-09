package com.example.demo.controller;
import com.example.demo.response.UserResponse;
import com.example.demo.services.UserService;
import com.example.demo.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User savedUser = userService.save(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> verifyUser(@RequestBody User user) {
        User foundUser = userService.findByNameAndPassword(user.getName(), user.getPassword());

        if (foundUser != null) {
            return new ResponseEntity<>(new UserResponse(foundUser.getId(), foundUser.isAdmin()), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User not found.", HttpStatus.NOT_FOUND);
        }
    }
}
