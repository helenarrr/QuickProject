package com.QuickProject.QuickProjectApp.dao;

import com.QuickProject.QuickProjectApp.entity.user.User;
import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * Хранилище для работы с сущностью "user"
 */
@RepositoryRestResource(path="users")
public interface UserRepository extends JpaRepository<User, UUID> {
    @Transactional(readOnly = true)
    Optional<User> findByEmail(String email) throws DataAccessException;


}
