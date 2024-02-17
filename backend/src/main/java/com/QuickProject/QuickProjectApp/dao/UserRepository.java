package com.QuickProject.QuickProjectApp.dao;

import com.QuickProject.QuickProjectApp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Хранилище для работы с сущностью "user"
 */
@Repository
public interface UserRepository extends JpaRepository<User, UUID> {

}
