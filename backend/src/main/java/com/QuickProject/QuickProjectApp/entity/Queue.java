package com.QuickProject.QuickProjectApp.entity;

import java.util.UUID;

import com.QuickProject.QuickProjectApp.entity.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Класс для работы с сущностью "queue"
 */
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name = "queue")
public class Queue {

    @Id
    @Column(name = "id")
    private UUID id = UUID.randomUUID();

    @OneToOne
    @PrimaryKeyJoinColumn
    private User user;

    @OneToOne
    @JoinColumn(name = "project_role_id")
    private ProjectRole projectRole;

    @Column(name = "checked")
    private Boolean checked;

}
