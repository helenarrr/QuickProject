package com.QuickProject.QuickProjectApp.dao;

import com.QuickProject.QuickProjectApp.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Хранилище для работы с сущностью "project"
 */
@Repository
public interface ProjectRepository extends JpaRepository<Project, UUID> {

}
