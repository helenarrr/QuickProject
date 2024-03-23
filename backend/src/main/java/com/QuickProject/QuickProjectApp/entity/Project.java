package com.QuickProject.QuickProjectApp.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.QuickProject.QuickProjectApp.entity.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Класс для работы с сущностью "project"
 */
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name = "projects")
public class Project {

    @Id
    @Column(name = "id")
    private UUID id = UUID.randomUUID();

    @OneToOne
    @JoinColumn(name = "creator_id") //айди владельца(создателя проекта)
    private User creator;

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

    @Builder.Default
    @OneToMany(mappedBy = "project")
    private List<ProjectRole> projectRoles = new ArrayList<>();


}
