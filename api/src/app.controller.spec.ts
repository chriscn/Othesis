import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root GET', () => {
    it('should return the project name', () => {
      expect(appController.getRoot()['name']).toBe('othesis-api');
    });

    it('should return a project version of correct type', () => {
      expect(appController.getRoot()['version']).toMatch(/[0-9].[0-9].[0-9]$/);
    });

    it('should not return an empty description', () => {
      expect(appController.getRoot()['description']).not.toBeNull();
    });

    it('should have Christopher Nethercott as the author', () => {
      expect(appController.getRoot()['author']).toBe('Christopher Nethercott');
    });

    it('should return the AGPL-3.0-only license', () => {
      expect(appController.getRoot()['license']).toBe('AGPL-3.0-only');
    })
  });
});
