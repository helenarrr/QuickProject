package com.QuickProject.QuickProjectApp.dao;

import com.QuickProject.QuickProjectApp.entity.Journal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Хранилище для работы с сущностью "journal"
 */
@Repository
public interface JournalRepository extends JpaRepository<Journal, UUID> {


}
