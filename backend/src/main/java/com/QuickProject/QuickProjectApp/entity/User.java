package com.QuickProject.QuickProjectApp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * Класс для работы с сущностью "user"
*/
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name = "users")
public class User {

    @Id
    @Column(name = "id")
    private UUID id = UUID.randomUUID();

    @Column(name = "nickname")
    private String nickname;

    @Column(name = "email")
    private String email;

    @Column(name = "telegram")
    private String telegram;

    @Column(name = "phone")
    private String phone;

    @Column(name = "password")
    private String password;

    @Column(name = "created_at")
    private LocalDateTime created_at;

    @Column(name = "tz")
    private String tz;

    @Column(name = "enable")
    private Boolean enable;

    @Column(name = "project_role")
    private String project_role;

    @Column(name = "portfolio_link")
    private String portfolio_link;

    @Column(name = "photo")
    private byte[] photo;

    @Builder.Default
    @OneToMany(mappedBy = "user")
    private List<Journal> journal = new ArrayList<>();

    @OneToOne(mappedBy = "creator")
    private Project project;

}
