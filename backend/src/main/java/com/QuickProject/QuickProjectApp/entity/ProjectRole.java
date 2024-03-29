package com.QuickProject.QuickProjectApp.entity;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Класс для работы с сущностью "project_role"
 */
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "projects_roles")
@Data
public class ProjectRole {

    @Id
    @Column(name = "id")
    private UUID id = UUID.randomUUID();

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "project_id")
    private Project project;

    @Builder.Default
    @OneToMany(mappedBy = "projectRole")
    private List<Journal> journal = new ArrayList<>();

    @OneToOne(mappedBy = "projectRole")
    private Queue queue;


}
