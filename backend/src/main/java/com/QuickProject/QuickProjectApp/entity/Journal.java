package com.QuickProject.QuickProjectApp.entity;

import java.time.LocalDateTime;
import java.util.UUID;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

@Builder
@Entity
@Table(name = "journal")
@Data
public class Journal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private UUID id;

    @Column(name = "projects_roles_id")
    private UUID projects_roles_id;

    @Column(name = "addind_at")
    private LocalDateTime addind_at;

    @Column(name = "finished_at")
    private LocalDateTime finished_at;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "project_id")
    private Project project;

}
