from time import sleep
import sys, json
import Adafruit_GPIO.SPI as SPI
import Adafruit_MCP3008

def main():
    CLK  = 18
    MISO = 23
    MOSI = 24
    CS   = 25
    SPI_PORT   = 0
    SPI_DEVICE = 0
    mcp = Adafruit_MCP3008.MCP3008(spi=SPI.SpiDev(SPI_PORT, SPI_DEVICE))
    while True:
        adcR = mcp.read_adc(0)
        adcG = mcp.read_adc(1)
        adcB = mcp.read_adc(2)
        print str(adcR) + " " + str(adcG) + " " + str(adcB)
        sys.stdout.flush()
        sleep(0.02)

# Start process
if __name__ == '__main__':
    main()
