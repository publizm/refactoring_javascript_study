import { Employee } from './11-8';

describe('11-8 Test', () => {
  it('should create new Engineer', () => {
    const engineer = Employee.createEngineer('Kim');
    expect(engineer.name).toBe('Kim');
    expect(engineer.type).toBe('Engineer');
  });
  it('should create new Manager', () => {
    const manager = Employee.createManager('Park');
    expect(manager.name).toBe('Park');
    expect(manager.type).toBe('Manager');
  });
});
