package com.QuickProject.QuickProjectApp.dao;

import com.QuickProject.QuickProjectApp.entity.Queue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Хранилище для работы с сущностью "queue"
 */
@Repository
public interface QueueRepository extends JpaRepository<Queue, UUID> {
}
