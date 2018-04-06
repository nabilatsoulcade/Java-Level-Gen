/*
*****************************************************************************
      FUNCTIONS THAT I'M USED TO USING IN GAME MAKER STUDIO 2, RECREATED
*****************************************************************************
*/

    //Linear Interpolation function (Needed for Smooth Camera Movement)
    function lerp(a, b, n)
      {
        return (1 - n) * a + n * b;
      }

    //Random Range (Needed for Camera Shake)
    function random_range(a,b)
      {
      return (Math.floor(Math.random() * (b - a + 1)) + a);
      }
