package com.QuickProject.QuickProjectApp.dao;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.QuickProject.QuickProjectApp.entity.ProjectRole;

/**
 * Хранилище для работы с сущностью "project_role"
 */
@Repository
public interface ProjectRoleRepository extends JpaRepository<ProjectRole, UUID> {
}
