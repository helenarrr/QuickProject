package com.QuickProject.QuickProjectApp.entity;

import java.time.LocalDateTime;
import java.util.UUID;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Класс для работы с сущностью "journal"
 */
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "journal")
@Data
public class Journal {

    @Id
    @Column(name = "id")
    private UUID id = UUID.randomUUID();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "project_id")
    private Project project;

    @ManyToOne
    @JoinColumn(name = "project_role_id")
    private ProjectRole projectRole;

    @Column(name = "addind_at")
    private LocalDateTime addind_at;

    @Column(name = "finished_at")
    private LocalDateTime finished_at;

}
