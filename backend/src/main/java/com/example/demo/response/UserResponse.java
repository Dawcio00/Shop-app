package com.example.demo.response;

public class UserResponse {
    private Long id;
    private boolean isAdmin;

    public UserResponse(Long id, boolean isAdmin) {
        this.id = id;
        this.isAdmin = isAdmin;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }
}
