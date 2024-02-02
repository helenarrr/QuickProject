package com.QuickProject.QuickProjectApp.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

@Builder
@Entity
@Data
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private UUID id;

    @Column(name = "user_id")
    private UUID user_id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "enable")
    private Boolean enable;

    @Column(name = "created_at")
    private LocalDateTime created_at;

    @Column(name = "closed_at")
    private LocalDateTime closed_at;

    @Builder.Default
    @OneToMany(mappedBy = "project")
    private List<Journal> journal = new ArrayList<>();
}
