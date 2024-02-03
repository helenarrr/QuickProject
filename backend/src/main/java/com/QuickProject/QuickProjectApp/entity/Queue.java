package com.QuickProject.QuickProjectApp.entity;

import java.util.UUID;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name = "queue")
public class Queue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private UUID id;

    @OneToOne
    @PrimaryKeyJoinColumn
    private User user;

    @OneToOne
    @JoinColumn(name = "project_role_id")
    private ProjectRole projectRole;

    @Column(name = "checked")
    private Boolean checked;

}
