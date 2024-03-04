package com.QuickProject.QuickProjectApp;

import com.QuickProject.QuickProjectApp.dao.ProjectRepository;
import com.QuickProject.QuickProjectApp.dao.UserRepository;
import com.QuickProject.QuickProjectApp.entity.Project;
import com.QuickProject.QuickProjectApp.entity.User;
import io.zonky.test.db.AutoConfigureEmbeddedDatabase;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureEmbeddedDatabase(provider = AutoConfigureEmbeddedDatabase.DatabaseProvider.ZONKY)
public class ProjectsRepositoyTest {
    @Autowired
    private ProjectRepository repository;
    @Autowired
    private UserRepository repositoryUser;
    @Test
    void saveProject(){
        User user = new User();
        user.setEnable(true);
        user.setEmail("test_user@test.com");
        user.setTelegram("@test");
        user.setPassword("");
        user.setCreated_at(LocalDateTime.now());
        user.setProject_role("test role");
        user.setTz("+3");
        repositoryUser.saveAndFlush(user);

        Project project = new Project();
        project.setCreator(user);
        project.setName("Quick Project");
        project.setDescription("This is a test project");
        project.setEnable(true);
        project.setCreated_at(LocalDateTime.now());
        project.setClosed_at(null);
        repository.saveAndFlush(project);

        assertThat(repository.findByName("Quick Project").get(0).getName()).isEqualTo("Quick Project");
    }
}
