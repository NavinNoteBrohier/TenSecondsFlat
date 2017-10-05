function SpriteUtilityScript(a_SpritePath)
{
    this.m_SpritePath  = a_SpritePath;

    this.Init = false;

    this.Initialize = function()
    {
        // Run this first
        if(Init)
        {
            this.Init = false;
        }
        else this.Init = true;
    };

    // Sprite sheet - holds all the visual data.
    function SpriteSheet()
    {

    };

    // Holds the information about each frame.
    function Frame()
    {

    };

    // Holds the sequence of frames.
    function Anim()
    {

    };

    // Holds all the utility for rendering sprites to the screen
    function RenderSprite(is_Init)
    {

    };
};