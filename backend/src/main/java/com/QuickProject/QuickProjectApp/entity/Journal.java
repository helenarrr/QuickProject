package com.QuickProject.QuickProjectApp.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "journal")
@Data
public class Journal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "user_id")
    private Long user_id;

    @Column(name = "project_id")
    private Long project_id;

    @Column(name = "projects_roles_id")
    private Long projects_roles_id;

    @Column(name = "addind_at")
    private LocalDateTime addind_at;

    @Column(name = "finished_at")
    private LocalDateTime finished_at;

}
