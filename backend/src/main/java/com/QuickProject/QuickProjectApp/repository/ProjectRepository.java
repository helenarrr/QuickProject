package com.QuickProject.QuickProjectApp.repository;

import com.QuickProject.QuickProjectApp.entity.Project;
import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

public interface ProjectRepository extends JpaRepository<Project, UUID> {

    @Transactional(readOnly = true)
    List<Project> findByName(String name) throws DataAccessException;

}
