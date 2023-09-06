function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const second = seconds % 60;
    return `${hours}h ${minutes}m ${second}s`;
  }


  describe('segundosParaHorasMinutosSegundos', () => {
     test('should return 1h 0m 0s when 3600', () => {
            expect(formatTime(3600)).toBe('1h 0m 0s');
        });
    test('should return 0h 1m 0s when 60', () => {
        expect(formatTime(60)).toBe('0h 1m 0s');
    }
    );
    test('should return 0h 0m 1s when 1', () => {
        expect(formatTime(1)).toBe('0h 0m 1s');
    }
    );
  });