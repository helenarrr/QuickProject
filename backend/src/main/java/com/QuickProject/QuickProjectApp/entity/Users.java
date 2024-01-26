package com.QuickProject.QuickProjectApp.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "users")
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "login")
    private String login;

    @Column(name = "nickname")
    private String nickname;

    @Column(name = "email")
    private String email;

    @Column(name = "telegramm")
    private String telegramm;

    @Column(name = "phone")
    private String phone;

    @Column(name = "password")
    private String password;

    @Column(name = "created_at")
    private LocalDateTime created_at;

    @Column(name = "enable")
    private Boolean enable;

    @Column(name = "role")
    private String role;

    @Column(name = "photo")
    private Byte[] photo;

}
