package com.QuickProject.QuickProjectApp;

import com.QuickProject.QuickProjectApp.entity.Project;
import com.QuickProject.QuickProjectApp.entity.User;
import com.QuickProject.QuickProjectApp.repository.ProjectRepository;
import com.QuickProject.QuickProjectApp.repository.UserRepository;
import io.zonky.test.db.AutoConfigureEmbeddedDatabase;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.time.LocalDateTime;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureEmbeddedDatabase(provider = AutoConfigureEmbeddedDatabase.DatabaseProvider.ZONKY)
public class UserRepositoyTest {
    @Autowired
    private UserRepository repository;

    @Test
    void saveProject(){
        User user = new User();
        user.setEnable(true);
        user.setLogin("test");
        user.setEmail("test@test.com");
        user.setTelegram("@test");
        user.setPassword("");
        user.setCreated_at(LocalDateTime.now());
        user.setProject_role("test role");
        user.setTz("+3");
//        user.setId(UUID.randomUUID());


        repository.saveAndFlush(user);

//        assertThat(repository.findByLogin("test").size()).isEqualTo(1);
        assertThat(repository.findByLogin("test").get(0).getLogin()).isEqualTo("test");
    }
}
