package com.QuickProject.QuickProjectApp.dao;

import com.QuickProject.QuickProjectApp.entity.Queue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Хранилище для работы с сущностью "queue"
 */
@RepositoryRestResource(path="queue")
public interface QueueRepository extends JpaRepository<Queue, UUID> {
}
